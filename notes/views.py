from django.shortcuts import render
from rest_framework import generics

from . import models
from . import serializers
# Create your views here.


class NoteList(generics.ListCreateAPIView):  # create Note List class
    queryset = models.Note.objects.all()
    # transfrom our model using serializer to json data
    serializer_class = serializers.NoteSerializer


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Note.objects.all()
    # getting the details
    serializer_class = serializers.NoteSerializer
