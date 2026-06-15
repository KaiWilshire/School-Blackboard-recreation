from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

FILE_PATH = r"file:///C:/Users/Kai/Desktop/SCHOOL/project-main/Final%20Project/Login.html"

driver = webdriver.Chrome()
driver.maximize_window()
driver.get(FILE_PATH)

driver.find_element(By.ID, "email").send_keys("student@stamford.edu")
driver.find_element(By.ID, "password").send_keys("123456")
driver.find_element(By.ID, "loginBtn").click()

time.sleep(2)

try:
    driver.find_element(By.CSS_SELECTOR, "#loginPopup .btn.btn-primary").click()
except:
    pass

wait = WebDriverWait(driver, 10)

student_btn = wait.until(
    EC.element_to_be_clickable((By.ID, "hamburgerMenu"))
)

driver.execute_script("arguments[0].click();", student_btn)
profile_link = wait.until(
    EC.visibility_of_element_located(
        (By.CSS_SELECTOR, '.dropdown-menu.show a[href="profile.html"]')
    )
)

profile_link.click()

time.sleep(2)

assert "Jane Doe" in driver.page_source

print("AT004 PASS")
time.sleep(5)
driver.quit()