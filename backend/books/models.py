import uuid 
from django.db import models

from django.contrib.auth.models import User


class Book(models.Model):
    id = models.UUIDField( 
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    genres = models.CharField(max_length=50, default='fiction')
    recap = models.CharField(max_length=500, default='', null=True, blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.title

class FavoriteBook(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    