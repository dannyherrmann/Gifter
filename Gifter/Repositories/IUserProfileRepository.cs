using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAllUsers();

        UserProfile GetUser(int id);

        void AddUser(UserProfile userProfile);
    }
}