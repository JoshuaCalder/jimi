from django.db import models

class Parties(models.Model):
	party_id = models.IntegerField()

class Users(models.Model):
	user_id = models.CharField(max_length=100)
	user_party = models.ForeignKey(Parties, on_delete=models.CASCADE)

class Tracks(models.Model):
	track_id = models.CharField(max_length=100)
	track_user = models.ForeignKey(Users, on_delete=models.CASCADE)
