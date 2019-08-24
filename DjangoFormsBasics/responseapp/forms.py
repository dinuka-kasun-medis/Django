
from django import forms
from .models import Customer
from .models import Data

class MyForm(forms.ModelForm):
    class Meta:            
        model=Customer
        fields=['nic','email','f_name' ,'l_name','age']


class DataForm(forms.ModelForm):
    class Meta:            
        model=Data
        fields=['data','mobile','address']
