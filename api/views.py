# 所有视图函数在此书写，包括前后端数据交互函数

import json

from django.http import HttpResponse
from django.shortcuts import render


# 返回首页界面
def index(request):
    return render(request, "index.html")


# 测试函数，用于测试前后端的数据连通
def api_data_test(request):
    test_data = {
        'name': 'test data',
        'status': 'success',
    }
    return HttpResponse(json.dumps(test_data))
