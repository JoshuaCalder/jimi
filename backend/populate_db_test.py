import os 
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "jimi_project.settings")	

django.setup()

from brains.models import Parties
from brains.models import Users
from brains.models import Tracks

if __name__ == '__main__':
	Parties.objects.all().delete()
	Users.objects.all().delete()
	Tracks.objects.all().delete()

	u1 = Users.objects.create(
		user_id = 'f9d2e99224f002e99a9a6fc42dd7',
		user_party = Parties.objects.create(
			party_id = 1
		),
	)

	# carly rae jepsen
	Tracks.objects.create(
		track_id = '11dFghVXANMlKmJXsNCbNl',
		track_user = u1,
	)
