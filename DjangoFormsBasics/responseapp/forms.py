
from django import forms
from .models import Customer

class MyForm(forms.ModelForm):
    class Meta:            
        model=Customer
        fields=['f_name' ,'l_name','age']
    
