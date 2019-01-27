import brains.spotify_api as spo

# creates playlist, adds admins tracks, 
def create_playlist(admin):
    track_list = spo.get_user_top_tracks(admin.user_access_token)
    playlist_id = spo.make_playlist(admin)

    track_list = [track['uri'] for track in track_list]
    spo.add_tracks_to_tracklist(admin,track_list,playlist_id)
    new_pl = spo.get_tracklist(admin,playlist_id)
    print(new_pl)
    return None