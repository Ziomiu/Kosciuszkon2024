import tensorflow as tf
from tensorflow import keras
from keras import models
from keras import preprocessing
import matplotlib.pyplot as plt
import cv2
import numpy as np
import os
import time

classifier = models.load_model("C:\\Users\\klonl\\Kosciuszkon\\Kosciuszkon2024\\Model\\exported_model.keras")

test_im = preprocessing.image.load_img("C:\\Users\\klonl\\OneDrive\\Obrazy\\Z aparatu\\puchav3.jpg",target_size=(150,150))
test_im = preprocessing.image.img_to_array(test_im)
test_im = np.expand_dims(test_im, axis = 0)
print("Butelka" if classifier.predict(test_im)[0,0] == 1 else "Nie butelka")


def process_frame(frame, model):
    img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    print(img.shape)
    img = cv2.resize(img, (150, 150))
    print(img)
    # img = preprocessing.image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    # print(img)
    
    prediction = model.predict(img)
    time.sleep(2)
    return 'Plastic Bottle' if prediction[0][0] == 1 else 'Not Plastic Bottle'


def recognize_plastic_bottle_live(model):
    cap = cv2.VideoCapture(0)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        label = process_frame(frame, model)

        cv2.putText(frame, label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

        cv2.imshow('Plastic Bottle Recognition', frame)

    
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

# Run the live recognition
recognize_plastic_bottle_live(classifier)