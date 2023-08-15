from django.urls import path
from . import views

urlpatterns = {
    path('home/',views.home,name='home'),
    path('login/',views.login,name='login'),
    path('editemp/',views.editemp,name='edit2'),
    path('edittable/',views.edittable,name='edit1'),
    path('form/',views.form,name='form'),
    path('request/',views.vacrequest,name='req'),
    path('add/', views.addemployee, name='add_employee'),
    path('delete-user/<int:idnumber>/',views.delete_data,name='delete_data'),
    path('delete-req/<int:idnumber>/',views.delete_requests,name='delete_requests'),
}