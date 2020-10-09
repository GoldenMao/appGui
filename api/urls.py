from django.urls import path
from .import views

urlpatterns = [
    path('', views.index),
    path('api/', views.api_data_test)  # 测试连接
]
