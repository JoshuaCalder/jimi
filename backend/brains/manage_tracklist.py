import brains.spotify_api as spo


def clean_raw_tracks(raw_tracks):
    return [track['uri'] for track in raw_tracks]

# creates playlist, adds admins tracks, 
def create_playlist(admin):
    raw_track_list = spo.get_user_top_tracks(admin.user_access_token)
    playlist_id = spo.make_playlist(admin)

    track_list = clean_raw_tracks(raw_track_list)
    spo.add_tracks_to_tracklist(admin,track_list,playlist_id)
    new_pl = spo.get_tracklist(admin,playlist_id)
    print(len(new_pl))
    return playlist_id

def add_top_tracks(user,playlist_id):
    raw_track_list = spo.get_user_top_tracks(user.user_access_token)
    track_list = clean_raw_tracks(raw_track_list)
    spo.add_tracks_to_tracklist(user,track_list,playlist_id)
    new_pl = spo.get_tracklist(user,playlist_id)
    print(len(new_pl))
    return

def get_tracklist(admin,playlist_id):
    return spo.get_tracklist(admin,playlist_id)