# music/views.py

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, get_list_or_404

from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import generics, status

from .serializers import MusicSerializer
from .serializers import MusicListSerializer
from .serializers import GenreSerializer

from .models import Music
from .models import Genre

class CreateMusic(generics.ListCreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

    def perform_create(self, serializer):
        serializer.save()

class MusicDetails(APIView):
    def get(self, request, pk):
        music = get_object_or_404(Music, id=pk)
        return Response(MusicSerializer(music).data)

class MusicList(APIView):
    def get(self, request):
        music_list = Music.objects.all().order_by('-date_modified')
        return Response(MusicListSerializer(music_list, many=True).data)
    
    def put(self):
        pass

class CreateGenre(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

    def perform_create(self, serializer):
        serializer.save()

class MusicByGenre(APIView):
    def get(self, request, pk):
        ## GET MUSIC BY GENRE ##
        music_list = get_list_or_404(Music, genre_id=pk)
        music_serialized = MusicSerializer(music_list, many=True).data
        return Response(music_serialized)

    def put(self):
        pass