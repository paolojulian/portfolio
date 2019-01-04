# music/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns

from .views import CreateMusic
from .views import MusicDetails
from .views import MusicList

from .views import CreateGenre
from .views import MusicByGenre

urlpatterns = {
    url(r'^create/$', CreateMusic.as_view(), name="Music Create"),
    url(r'^list/$', MusicList.as_view(), name="Music List"),
    url(r'^(?P<pk>\d+)/$', MusicDetails.as_view(), name="Music Details"),

    url(r'^genre/create/$', CreateGenre.as_view(), name="Genre Create"),
    url(r'^genre/(?P<pk>\d+)/$', MusicByGenre.as_view(), name="Music by Genre"),
}

urlpatterns = format_suffix_patterns(urlpatterns)
