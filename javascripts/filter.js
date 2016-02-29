var filter = {
    loadRedirect: function(){
        str = "/discover?q=" + $('[name="q"]').val();
        sub = $('[name="subtitles"]');
        lang = $('[name="[language]"] option:selected');
        sort = $('[name="sort"]:checked');
        $('[name="tags[]"]').each(function(index){
            if(this.checked){
                str = str + "&tags[]=" + this.value;
            }
        });
        if (sub[0].checked){
            str = str + "&subtitles=" + sub.val();
        }
        if (!(lang.val() == "")){
            str = str + "&language=" + lang.val();
        }
        str = str + "&sort=" + sort.val();
        document.location.href=str;
    },
    searchResults: function(){
        document.location.href= "/discover?q=" +  $('[name="q"]').val();
    },
    cacheLang: function(){
        $.cookie("language", $(".langCache option:selected").val(), { expires: 20, path: '/' });
        location.reload();
    },
    toggleDisplay: function(){
        if ($("input[type='radio'][name='displaytype']:checked").val() == "detailed"){
            $.cookie("display", "detailed", {expires: 20, path: '/'});
            $(".compact").hide();
            $(".detailed").fadeIn( 200, function() {
                // Animation complete
            });
        }
        if ($("input[type='radio'][name='displaytype']:checked").val() == "compact"){
            $.cookie("display", "compact", {expires: 20, path: '/'});
            $(".detailed").hide();
            $(".compact").fadeIn( 200, function() {
                // Animation complete
            });
        }
    },
    loadingText: function(){
        $("a.load-more-videos").text("Loading...");
        // $(".load-more-videos").removeAttr('href');
    },
    initialize: function(){
        $(".langCache").change(filter.cacheLang);
        $("#loadFilterResults").on("click",filter.loadRedirect);
        $("#searchResults").on("click",filter.searchResults);
        $(".searchField").keypress(function(e){
            if (e.which == 13) {
                filter.searchResults();
            }
        });
        $("input[type='radio'][name='displaytype']").filter('[value=' + $.cookie("display") + ']').attr('checked', true);
        filter.toggleDisplay();
        $("input[type='radio'][name='displaytype']").change(filter.toggleDisplay);
        $(document).on("ajax:send", ".load-more-videos", filter.loadingText);
    }
};
filterReady = function(){
    filter.initialize();
}
$(document).ready(filterReady);
