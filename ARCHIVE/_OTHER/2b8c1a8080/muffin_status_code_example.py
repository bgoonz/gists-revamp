import muffin


app = muffin.Application('not_found')


@app.register('/not_found')
def not_found(request):
    return muffin.Response(
        status=404, 
        text='{"msg": "Not Found"}',
        content_type = 'application/json'
    )

# muffin muffin_status_code run