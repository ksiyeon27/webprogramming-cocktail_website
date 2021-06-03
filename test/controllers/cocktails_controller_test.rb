require 'test_helper'

class CocktailsControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get cocktails_search_url
    assert_response :success
  end

end
