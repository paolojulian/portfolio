# api/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CreateHobby
from .views import DetailsHobby

urlpatterns = {
    url(r'^hobby/$', CreateHobby.as_view(), name="create"),
    url(r'^hobby/(?P<pk>[0-9]+)/$', DetailsHobby.as_view(), name="details"),
}

urlpatterns = format_suffix_patterns(urlpatterns)