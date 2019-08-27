from django import forms
from .models import FilterDetails
from .models import FilterEmployee

class Details(forms.ModelForm):
    class Meta:            
        model=FilterDetails
        fields=['id','details']
        
class Employee(forms.ModelForm):
    class Meta:            
        model=FilterEmployee
        fields=['id','nic','f_name' ,'l_name','salary']
        
