from rest_framework import serializers
from . import models


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        # convert our Note module to serializer with all fields
        model = models.Note
        fields = '__all__'
