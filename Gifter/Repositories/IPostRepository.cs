using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetAllWithComments();
        Post GetById(int id);

        void Add(Post post);

        void Update(Post post);

        void Delete(int id);

    }
}