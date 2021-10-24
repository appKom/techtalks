# Django backend

## Requirements

- Python
- Pip

## Installation

1. Change directory to (the outmost) server folder (`cd server`) (not server/server)
2. Create a virtual python environment (`python -m venv venv`) (use your os's python3 command)
3. Activate the environment (`source venv/bin/activate`)
4. Install requirements (`pip install -r requirements.txt`) (use your os's pip3 command)

## Launching

1. Migrate database (`python manage.py migrate`)
2. Run the server (`python manage.py runserver`)

## Other

### Creating a superuser

1. Create a superuser with `python manage.py createsuperuser` and follow instructions
