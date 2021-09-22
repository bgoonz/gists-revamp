class MyClass:

    __instance = None

    @staticmethod
    def instance():
        if not MyClass.__instance:
            MyClass.__instance = MyClass()
        return MyClass.__instance
