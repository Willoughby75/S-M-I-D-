from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
import jwt
from datetime import datetime, timedelta
import os

app = FastAPI(title="SMID Secure Authentication API")

# 1. CORS MIDDLEWARE (Crucial for GitHub Pages to communicate with this backend)
# Replace this with your actual GitHub Pages URL once testing is complete
origins = [
    "https://willoughby75.github.io",
    "http://127.0.0.1:5500",  # Local testing
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. SECURITY CONFIGURATION
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
JWT_SECRET = os.environ.get("JWT_SECRET", "SUPER_SECRET_SMID_KEY_CHANGE_THIS_IN_PRODUCTION")
ALGORITHM = "HS256"

# 3. MOCK DATABASE (For prototype phase - Kimi can help you connect SQLite/PostgreSQL next)
USER_DB = {}

# 4. DATA MODELS (Data validation)
class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

# 5. API ENDPOINTS
@app.post("/register", status_code=status.HTTP_201_CREATED)
async def register(user: UserRegister):
    if user.email in USER_DB:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Securely hash the password before saving!
    hashed_password = pwd_context.hash(user.password)

    USER_DB[user.email] = {
        "id": f"smid_{int(datetime.utcnow().timestamp())}",
        "name": user.name,
        "email": user.email,
        "password": hashed_password,
        "verified": False,
        "trustScore": 50
    }
    return {"message": "User registered successfully"}

@app.post("/login")
async def login(user: UserLogin):
    db_user = USER_DB.get(user.email)
    if not db_user or not pwd_context.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    # Generate JSON Web Token (JWT) valid for 1 hour
    expire = datetime.utcnow() + timedelta(hours=1)
    token_data = {"sub": db_user["email"], "exp": expire}
    encoded_jwt = jwt.encode(token_data, JWT_SECRET, algorithm=ALGORITHM)

    return {
        "token": encoded_jwt,
        "user": {
            "id": db_user["id"],
            "name": db_user["name"],
            "email": db_user["email"],
            "verified": db_user["verified"],
            "trustScore": db_user["trustScore"]
        }
    }
