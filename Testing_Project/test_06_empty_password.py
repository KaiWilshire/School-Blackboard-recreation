from selenium import webdriver
from selenium.webdriver.common.by import By
import time

FILE_PATH = r"file:///C:/Users/Kai/Desktop/SCHOOL/project-main/Final%20Project/Login.html"

driver = webdriver.Chrome()
driver.get(FILE_PATH)

driver.find_element(By.ID, "email").send_keys("student@stamford.edu")

button = driver.find_element(By.ID, "loginBtn")

assert button.get_attribute("disabled") is not None

print("AT006 PASS")
time.sleep(5)
driver.quit()