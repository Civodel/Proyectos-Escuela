package conexionMysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class ConectarMysql {

    private static Connection conn;
    private static final String driver = "com.mysql.jdbc.Driver";
    private static final String user = "root";       
    private static final String password = "";        
    private static final String url =  "jdbc:mysql://localhost:3306/dbusuariosprueba1";    
    
    
    public ConectarMysql()  {
        conn = null;
        try { 
          Class.forName(driver);
          conn =  DriverManager.getConnection(url, user, password);
          if (conn != null){
              System.out.println("cone chida");
              
          } 
          
            
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("cone no magica" + e);
        }
    }
    
    public Connection obtenercone(){
        return conn;
    }
       public void desconectar(){
       conn = null;
       if (conn == null){
           System.out.println("ia no hau una conexion entre tu y eia");
       }
    }
    
    
}
