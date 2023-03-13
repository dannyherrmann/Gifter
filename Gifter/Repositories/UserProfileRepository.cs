using Gifter.Models;
using Gifter.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Gifter.Repositories;

public class UserProfileRepository : BaseRepository, IUserProfileRepository
{
    public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

    public List<UserProfile> GetAllUsers()
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"select up.Id, 
                                           up.Name, 
                                           up.Email, 
                                           up.ImageUrl, 
                                           up.Bio, 
                                           up.DateCreated

                                    from UserProfile up";

                var reader = cmd.ExecuteReader();

                var users = new List<UserProfile>();
                while (reader.Read())
                {
                    users.Add(new UserProfile()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        Name = DbUtils.GetString(reader, "Name"),
                        Email = DbUtils.GetString(reader, "Email"),
                        ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                        Bio = DbUtils.GetString(reader, "Bio"),
                        DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                    });
                }

                reader.Close();

                return users;
            }
        }
    }

    public UserProfile GetUser(int id)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"select up.Id, 
                                           up.Name, 
                                           up.Email, 
                                           up.ImageUrl, 
                                           up.Bio, 
                                           up.DateCreated

                                    from UserProfile up
                                    where up.Id = @Id";

                DbUtils.AddParameter(cmd, "Id", id);

                var reader = cmd.ExecuteReader();

                UserProfile userProfile = null;
                if (reader.Read())
                {
                    userProfile = new UserProfile()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        Name = DbUtils.GetString(reader, "Name"),
                        Email = DbUtils.GetString(reader, "Email"),
                        ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                        Bio = DbUtils.GetString(reader, "Bio"),
                        DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                    };
                }

                reader.Close();

                return userProfile;
            }
        }
    }

}
