# interface/serializers.py

from rest_framework import serializers
from .models import Hobby

class HobbySerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby
        fields = ('id', 'name', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')