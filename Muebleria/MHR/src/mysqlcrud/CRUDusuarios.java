
package mysqlcrud;

import conexionMysql.ConectarMysql;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import sun.util.logging.PlatformLogger;


public class CRUDusuarios extends ConectarMysql{
    
    public boolean validarID (usuarios user){
        
        PreparedStatement es = null;
        ResultSet res = null;
        Connection conn = obtenercone();
        
        String mysql = "SELECT idusuarios FROM usuarios Where idusuarios = ? ";
        try{
            es = conn.prepareStatement(mysql);
            es.setInt(1, user.getIdusuarios());
            res = es.executeQuery();
            
            if (res.next()){
                
                if(user.getIdusuarios() == res.getInt(1)){
                
                 user.setIdusuarios(res.getInt(1));
                 System.out.println("si jalawe");
                 return true;
                } else {
                    
                    return false;
                }
              
            }
            return false;
        }catch(SQLException ex){
             Logger.getLogger(CRUDusuarios.class.getName()).log(Level.SEVERE, null, ex);
             System.out.println("ta mal");
        }
        return false;
        
    }
    

}
