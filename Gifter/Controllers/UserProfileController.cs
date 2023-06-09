﻿using Gifter.Repositories;
using Gifter.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gifter.Controllers;

[Route("[controller]")]
[ApiController]
public class UserProfileController : ControllerBase
{
    private readonly IUserProfileRepository _userProfileRepository;

    public UserProfileController(IUserProfileRepository userProfileRepository)
    {
        _userProfileRepository = userProfileRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_userProfileRepository.GetAllUsers());
    }

    [HttpGet("{id}")]

    public IActionResult GetUser(int id)
    {
        var user = _userProfileRepository.GetUser(id);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    [HttpPost]
    public IActionResult AddUser(UserProfile userProfile)
    {
        _userProfileRepository.AddUser(userProfile);
        return CreatedAtAction("Get", new {id = userProfile.Id}, userProfile);
    }
}
