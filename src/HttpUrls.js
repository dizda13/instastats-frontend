 class HttpUrls{

    static getMediaById = function(id) {
        return 'http://localhost:8080/media/'+id;
    }

    static getCommentsByMediaId = function(mediaId){
        return 'http://localhost:8080/likes/'+mediaId
    }

    static getLikesByMediaId = function(mediaId){
        return 'http://localhost:8080/comments/'+mediaId
    }

    static getUser = function(){
        return 'http://localhost:8080/user'
    }

    static getTopComments = function(topNumber){
        return 'http://localhost:8080/top/comments/'+topNumber
    }

    static getTopLikes = function(topNumber){
        return 'http://localhost:8080/top/likes/'+topNumber
    }

    static getInstagramConnectionLink= function(){
        return 'http://localhost:8080/instagram/connect'
    }

    static postAuth = function(){
        return 'http://localhost:8080/auth'
    }
}

export default HttpUrls