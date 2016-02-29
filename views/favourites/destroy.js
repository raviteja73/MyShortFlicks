$(".<%= @video.url_token %> .favourite").html("<%=  escape_javascript(render 'favourites/add_favourite', video: @video) %>");
