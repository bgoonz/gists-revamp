#!/usr/bin/env python

from selenium import webdriver

baseurl = "http://staging-v2.postano.com/login"
username = "didip"
password = "baz"

mydriver = webdriver.Firefox()
mydriver.get(baseurl)
mydriver.maximize_window()

mydriver.find_element_by_xpath("//input[@name='user_login']").clear()
mydriver.find_element_by_xpath("//input[@name='user_login']").send_keys(username)

mydriver.find_element_by_xpath("//input[@name='password']").clear()
mydriver.find_element_by_xpath("//input[@name='password']").send_keys(password)

mydriver.find_element_by_id("submit").click()