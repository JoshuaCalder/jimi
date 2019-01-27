from django.urls import path
from . import views

# urls go here
urlpatterns = [
	path('/join_party', views.join_party, name='join_party'),
	path('/get_party_top_songs', views.get_party_top_songs, name='get_party_top_songs'),
]