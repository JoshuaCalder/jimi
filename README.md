# jimi
A space based platform for generating coloborative playlists.


## Requirements
* Python3
```$ sudo apt install python3```

* Python3 virtual environment 
```$ sudo apt install python3-venv```

* Nodejs
```$ sudo apt install nodejs```


## Getting Started
### Back End 
1. Create and Activate Virtual Environment
```
cd backend
python3 -m venv venv
source venv/bin/activate
```
2. Install Dependencies
```
pip3 install -r requirements.txt
```
3. Migrate Database
```
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```
4. Start Back End 
```
python3 manage.py runserver
```
### Front End 
1. Install Dependencies
```
$ cd frontend
$ npm install
```
2. Start React Application
```
$ npm start
```
