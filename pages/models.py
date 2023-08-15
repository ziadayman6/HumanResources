from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    id_number = models.IntegerField(unique=True)
    gender = models.CharField(max_length=10)
    marital_status = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    available_vacation_days = models.IntegerField()
    approved_vacation_days = models.IntegerField()
    salary = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name
    
class VacationRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    id_number = models.CharField(max_length=100)
    vacation_days = models.IntegerField()
    reason = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name