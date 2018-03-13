$(document).ready(function() {

  $("form.new-todo").bind("ajax:complete", function(e) {
    $("input[name='todo[title]']").val(" ");
  });

  function Todo(todoId) {
    this.id = todoId;
    this.ajaxRequest = function(todoId, requestType, url, callback, callbackError) {
      $.ajax({
        dataType: 'json',
        type: requestType,
        data: { id: todoId },
        url: url,
        success: function(data) {
          callback(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
          if (callbackError != undefined) callbackError(todoId);
          alert('Something went worng, Please try Again.');
        }
      });
    },
    this.completeSuccessResponse = function(data) {
      if (data.is_complete) {
        $("tr[data-id='"+data.id+"']").find('div').addClass('t-complete');
      } else {
        $("tr[data-id='"+data.id+"']").find('div').removeClass('t-complete');
      }
    },
    this.deleteSuccessResponse = function(data) {
      $("tr[data-id='"+data.id+"']").remove();
    },
    this.deleteError = function(id) {
      $("tr[data-id='"+id+"']").show();
    },
    this.complete = function() {
      urlRequest = '/todos/'+this.id+'/complete';
      this.ajaxRequest(this.id, 'put', urlRequest, this.completeSuccessResponse);
    },
    this.delete = function() {
      $("tr[data-id='"+this.id+"']").hide();
      urlRequest = '/todos/'+this.id;
      this.ajaxRequest(todoId, 'delete', urlRequest, this.deleteSuccessResponse, this.deleteError);
    }
  }


  $(document).on('click', 'a.complete-task', function(e) {
    e.preventDefault();
    var todo = new Todo($(this).data('id'));
    todo.complete();
  })

  $(document).on('click', 'a.delete-task', function(e) {
    // if (confirm('Are you sure want to delete this task?')) {
      e.preventDefault();
      var todo = new Todo($(this).data('id'));
      todo.delete();
    // }
  })

}) 
