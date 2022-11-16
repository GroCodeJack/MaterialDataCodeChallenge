using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAppIETest.Models;

namespace WebAppIETest.Controllers
{
    public class MaterialDataController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"
                select * from dbo.materialData
            ";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["IEMaterialDataDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public String Post(MaterialData material)
        {
            try
            {
                var query = @"
                    INSERT INTO dbo.materialData VALUES
                    (
                    '" + material.Mfr + @"'
                    ,'" + material.TypeName + @"'
                    ," + material.TypeId + @"
                    ,'" + material.StyleName + @"'
                    ,'" + material.StyleId + @"'
                    ," + material.ColorValue + @"
                    ,'" + material.ColorName + @"'
                    ,'" + material.Size + @"'
                    )";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["IEMaterialDataDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!";

            }
            catch(Exception)
            {
                return "Failed to Add!";
            }

        }

        public String Put(MaterialData material)
        {
            try
            {
                var query = @"
                    UPDATE dbo.materialData SET
                    Mfr='" + material.Mfr + @"',
                    TypeName='" + material.TypeName + @"',
                    TypeId=" + material.TypeId + @",
                    StyleName='" + material.StyleName + @"',
                    StyleId='" + material.StyleId + @"',
                    ColorValue=" + material.ColorValue + @",
                    ColorName='" + material.ColorName + @"',
                    Size='" + material.Size + @"'
                    WHERE rowId=" + material.RowId + @"
                    ";



                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["IEMaterialDataDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Edited Successfully!";

            }
            catch (SqlException ex)
            {
                string exmessage = ex.Message + ex.LineNumber + ex.Errors;
                return exmessage;
            }

        }

        public String Delete(int id)
        {
            try
            {
                var query = @"
                    DELETE FROM dbo.materialData
                    WHERE rowId=" + id + @"
                    ";



                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["IEMaterialDataDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!";

            }
            catch (Exception)
            {
                return "Failed to Delete!";
            }

        }
    }
}
