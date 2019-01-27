from django.db import models
import uuid

class Parties(models.Model):
	party_admin = models.UUIDField(editable=False)
	party_name = models.CharField(max_length=100)
	party_code = models.IntegerField(unique=True)

class Users(models.Model):
    user_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.CharField(max_length=100)
    user_access_token = models.CharField(max_length=100)
    user_party = models.ForeignKey(Parties, null=True, on_delete=models.CASCADE)

class Tracks(models.Model):
	track_id = models.CharField(max_length=100)
	track_user = models.ForeignKey(Users, on_delete=models.CASCADE)
