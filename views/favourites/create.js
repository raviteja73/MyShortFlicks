$(".<%= @video.url_token %> .favourite").html("<%=  escape_javascript(render 'favourites/remove_favourite', video: @video) %>");
