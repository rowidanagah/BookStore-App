from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView 
from .BookSerializers import *
from .models import *
from django.http import Http404
from django.shortcuts import get_object_or_404
# Create your views here.

class BookList(ListCreateAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.all()



class BookDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    lookup_field = 'pk'

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        filter_kwargs = {self.lookup_field: self.kwargs[self.lookup_field]}
        obj = get_object_or_404(queryset, **filter_kwargs)
        self.check_object_permissions(self.request, obj)
        return obj

class FavoriteBookView(ListCreateAPIView):
    serializer_class = FavoriteBookSerializer

    def get_queryset(self):
        # Retrieve the favorite books for the currently loged in and authenticated user
        return FavoriteBook.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)