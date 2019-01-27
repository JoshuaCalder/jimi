from django.urls import path
from . import views

# urls go here
urlpatterns = [
	path('join_party', views.join_party, name='join_party'),
	path('party_top_tracks', views.party_top_tracks, name='party_top_tracks'),
]