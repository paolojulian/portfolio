# interface/views.py

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import generics
from .serializers import HobbySerializer
from .models import Hobby

# from django.shortcuts import render

# Create your views here.
class CreateHobby(generics.ListCreateAPIView):
    queryset = Hobby.objects.all()
    serializer_class = HobbySerializer

    def perform_create(self, serializer):
        serializer.save()

class DetailsHobby(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""

    queryset = Hobby.objects.all()
    serializer_class = HobbySerializer