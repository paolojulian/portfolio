from rest_framework import serializers
from .models import Music
from .models import Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name')
        read_only_fields = ('id', )

class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ('id', 'name', 'genre', 'audio_path', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')

class MusicListSerializer(serializers.ModelSerializer):
    genre_name = serializers.CharField(source='genre.name', read_only=True)
    class Meta:
        model = Music
        fields = ('id', 'name', 'genre', 'genre_name', 'audio_path', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')