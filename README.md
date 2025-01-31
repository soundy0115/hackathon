# Decide.

## Setup (MacOS)

### 1. Client - ReactJS

```bash
# npm 설치
npm i npm@10.2.4

# 라이브러리 설치
cd hackathon/client
npm install # !!! 꼭 client 폴더위치에서만 실행 !!!
```

### 2. Server - Django

```bash
#파이썬 설치
brew update && brew install python@3.12

#가상환경 생성 및 접속
cd hackathon/server
python3.12 -m venv venv #생성
source ./venv/bin/activate #접속

#라이브러리 설치
pip install --upgrade pip
pip install -r requirements.txt
```

## Run

```bash
# client(react)
cd hackathon/client && npm start

# server(django)
cd hackathon/server
python manage.py makemigrations # model.py에 변경사항이 있는 경우에만
python manage.py migrate # model.py에 변경사항이 있는 경우에만
python manage.py runserver
```

## Google maps api

```bash
pip install googlemaps
from urllib.parse import quote
from urllib.request import Request, urlopen
import ssl
import json

kor_url = quote('서울특별시 서초구 서초2동 서초대로74길 14')
API_key = "API_key"

url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ kor_url +'&key=' + API_key + '&language=ko&region=KR'
req = Request(url, headers={ 'X-Mashape-Key': API_key })
```
