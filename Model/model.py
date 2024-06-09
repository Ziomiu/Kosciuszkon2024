import tensorflow as tf
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
import matplotlib.pyplot as plt
import cv2
import numpy as np
import os

def prepare_img(image_path):
    img = cv2.imread(image_path,cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (150, 150))
    img = img / 255.0
    return img

def load_data(path):
    data = []
    file_names = os.listdir(path)
    for name in file_names:
        data.append(prepare_img(os.path.abspath(path,name)))

    return data



    
