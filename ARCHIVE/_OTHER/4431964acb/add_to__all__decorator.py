import sys


def add_to__all__(func_or_class):
    """"Use decorator to avoid retyping function/class names into __all__ module level variable."""
    all_list = sys.modules[func_or_class.__module__].__dict__.setdefault("__all__", [])

    if func_or_class.__name__ not in all_list:
        all_list.append(func_or_class.__name__)

    return func_or_class


#
# Class Decoration Example:
#
# @add_to__all__
# class Application(object):
#     pass

#
# Function Decoration Example:
#
# @add_to__all__
# def fabric_deploy_app():
#     pass
