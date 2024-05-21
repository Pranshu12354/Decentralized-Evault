from rest_framework import serializers
from .models import MoreInfo
from django.contrib.auth.models import User

class MoreInfo_Serial(serializers.ModelSerializer):
    class Meta:
        model = MoreInfo
        fields = '__all__'  # Corrected '__all__' here

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Update the fields to include the 'media/' prefix in the URLs
        ret['photo'] = f"/{ret['photo']}"
        ret['aadhar_photo'] = f"/{ret['aadhar_photo']}"
        ret['license_photo'] = f"/{ret['license_photo']}"
        return ret
    
class User_Serial(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'  # Corrected '__all__' here
