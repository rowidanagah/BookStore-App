from rest_framework import generics
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


@method_decorator(login_required, name='dispatch')
class SuperuserList(generics.ListAPIView):
    queryset = User.objects.filter(is_superuser=True)
    serializer_class = UserSerializer