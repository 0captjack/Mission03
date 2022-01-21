using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission03.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        //I need to watch the videos again to get the right word but these are like
        //telling the controller which views are in its arsenal and it can call them if 
        //it is told to do so. Something like that
        public IActionResult GradeCalc ()
        {
            return View();
        }
    }
}
