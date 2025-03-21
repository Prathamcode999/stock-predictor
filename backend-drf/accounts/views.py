from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class=UserSerializer
    permission_classes = [AllowAny] #anyone can see this view

class ProtectedView(APIView): #sends protected to frontend for fetching (check dashboard)
    permission_classes = [IsAuthenticated] #only logged in user can access this view

    def get(self,request):
        response ={
            'status': 'request was permitted'
        }
        return Response(response)
